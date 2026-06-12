import { View, ActivityIndicator } from "react-native";
import { useState, useMemo, useEffect } from "react";
import { Color } from "./types/color";
import { getColors, updateColor } from "./services/api";
import ColorGrid from "./components/ColorGrid";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [brand, setBrand] = useState("all");

  const filteredColors = useMemo(() => {
    return colors

      .filter(
        (c) =>
          filter === "all" ||
          (filter === "owned" && c.owned) ||
          (filter === "reorder" && c.reorder),
      )
      .filter((c) => brand === "all" || c.brand.includes(brand))
      .filter(
        (c) =>
          search === "" ||
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.article_number.includes(search),
      );
  }, [colors, filter, brand, search]);

  const ownedCount = colors.filter((c) => c.owned).length;

  const handleToggleOwned = async (id: number) => {
    const color = colors.find((c) => c.id === id);
    if (!color) return;

    const newOwned = !color.owned;
    await updateColor(id, { owned: newOwned });

    setColors(colors.map((c) => (c.id === id ? { ...c, owned: newOwned } : c)));
  };

  const handleToggleReorder = async (id: number) => {
    const color = colors.find((c) => c.id === id);

    if (!color) return;
    const newReorder = !color.reorder;
    await updateColor(id, { reorder: newReorder });

    setColors(
      colors.map((c) => (c.id === id ? { ...c, reorder: newReorder } : c)),
    );
  };

  useEffect(() => {
    const load = async () => {
      const data = await getColors();
      setColors(data);
      setLoading(false);
    };
    load();
  }, []);
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "#F0EEE9" }}>
        <Header />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View style={{ flex: 1 }}>
            <SearchBar value={search} onChangeText={setSearch} />

            <FilterBar
              filter={filter}
              brand={brand}
              onBrandChange={setBrand}
              onFilterChange={setFilter}
            />

            <ColorGrid
              colors={filteredColors}
              onToggleOwned={handleToggleOwned}
              onToggleReorder={handleToggleReorder}
              ownedCount={ownedCount}
            />
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
}

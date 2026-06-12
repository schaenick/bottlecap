import { View, ActivityIndicator } from "react-native";
import { useState, useMemo, useEffect } from "react";
import { Color } from "./types/color";
import { getColors, updateColor } from "./services/api";
import ColorGrid from "./components/ColorGrid";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ColorModal from "./components/ColorModal";

export default function App() {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [brand, setBrand] = useState("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedColor = colors.find((c) => c.id === selectedId) ?? null;
  const filteredColors = useMemo(() => {
    return colors

      .filter(
        (c) =>
          filter === "all" ||
          (filter === "owned" && c.owned) ||
          (filter === "reorder" && c.reorder) ||
          (filter === "notowned" && !c.owned),
      )
      .filter((c) => brand === "all" || c.brand.includes(brand))
      .filter(
        (c) =>
          search === "" ||
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.article_number.includes(search) ||
          c.brand.toLowerCase().includes(search.toLowerCase()),
      );
  }, [colors, filter, brand, search]);

  const ownedCount = colors.filter((c) => c.owned).length;

  const handleFilterChange = (value: string) => {
    setFilter(filter === value ? "all" : value);
  };

  const handleBrandChange = (value: string) => {
    setBrand(brand === value ? "all" : value);
  };
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

  const handleSave = async (
    id: number,
    comment: string,
    description: string,
  ) => {
    await updateColor(id, { comment, description });
    setColors(
      colors.map((c) => (c.id === id ? { ...c, comment, description } : c)),
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
              onBrandChange={handleBrandChange}
              onFilterChange={handleFilterChange}
            />

            <ColorGrid
              colors={filteredColors}
              onToggleOwned={handleToggleOwned}
              onToggleReorder={handleToggleReorder}
              onPress={(color) => setSelectedId(color.id)}
              ownedCount={ownedCount}
            />
          </View>
        )}
      </View>
      <ColorModal
        color={selectedColor}
        onClose={() => setSelectedId(null)}
        onToggleOwned={handleToggleOwned}
        onToggleReorder={handleToggleReorder}
        onSave={handleSave}
      />
    </SafeAreaProvider>
  );
}

import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color } from "../types/color";
import { theme } from "../theme/theme";
import ColorSwatch from "./ColorSwatch";

interface ColorModalProps {
  color: Color | null;
  onClose: () => void;
  onToggleOwned: (id: number) => void;
  onToggleReorder: (id: number) => void;
  onSave: (id: number, comment: string, description: string) => void;
}

export default function ColorModal({
  color,
  onClose,
  onToggleOwned,
  onToggleReorder,
  onSave,
}: ColorModalProps) {
  const insets = useSafeAreaInsets();
  const [comment, setComment] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (color) {
      setComment(color.comment ?? "");
      setDescription(color.description ?? "");
    }
  }, [color]);

  return (
    <Modal
      visible={color !== null}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />

        <View style={[styles.sheet, { paddingTop: insets.top }]}>
          <View style={styles.handleArea}>
            <View style={styles.handle} />
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {color && (
              <View style={styles.content}>
                <ColorSwatch
                  color={color.hex ?? "#cccccc"}
                  brand={color.brand}
                  name={color.name}
                />
                <Text style={styles.name}>{color.name}</Text>
                <Text style={styles.brand}>{color.brand}</Text>

                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Artikelnummer</Text>
                  <Text style={styles.infoValue}>{color.article_number}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Regal-Nr.</Text>
                  <Text style={styles.infoValue}>
                    {color.shelf_number ?? "—"}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Hex</Text>
                  <Text style={styles.infoValue}>{color.hex ?? "—"}</Text>
                </View>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={[
                      styles.toggleBtn,
                      color.owned && styles.toggleBtnActive,
                    ]}
                    onPress={() => onToggleOwned(color.id)}
                  >
                    <Text
                      style={[
                        styles.toggleText,
                        color.owned && styles.toggleTextActive,
                      ]}
                    >
                      {color.owned ? "Vorhanden" : "Nicht Vorhanden"}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.toggleBtn,
                      color.reorder && styles.toggleBtnActive,
                    ]}
                    onPress={() => onToggleReorder(color.id)}
                  >
                    <Text
                      style={[
                        styles.toggleText,
                        color.reorder && styles.toggleTextActive,
                      ]}
                    >
                      {color.reorder ? "Nachkaufen ✓" : "Nachkaufen"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.fieldLabel}>Beschreibung</Text>
                <TextInput
                  style={styles.textField}
                  value={description}
                  onChangeText={setDescription}
                  placeholder="z.B. warmes Rot, ähnlich Blut"
                  placeholderTextColor={theme.colors.textMuted}
                  multiline
                />

                <Text style={styles.fieldLabel}>Notiz</Text>
                <TextInput
                  style={styles.textField}
                  value={comment}
                  onChangeText={setComment}
                  placeholder="z.B. super für Basecoat"
                  placeholderTextColor={theme.colors.textMuted}
                  multiline
                />

                <TouchableOpacity
                  style={styles.saveBtn}
                  onPress={() => {
                    onSave(color.id, comment, description);
                    onClose();
                  }}
                >
                  <Text style={styles.saveText}>Speichern</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  backdrop: {
    height: 60,
  },
  sheet: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  handleArea: {
    paddingVertical: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: theme.colors.chip,
  },
  closeBtn: {
    position: "absolute",
    right: theme.spacing.lg,
    top: theme.spacing.sm,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.chip,
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    fontSize: 20,
    color: theme.colors.text,
    lineHeight: 22,
  },
  scrollContent: {
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl ?? 24,
  },
  content: {
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: theme.colors.text,
    marginTop: theme.spacing.md,
  },
  brand: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
    marginBottom: theme.spacing.lg,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.chip,
  },
  infoLabel: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.textMuted,
  },
  infoValue: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.text,
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.lg,
    width: "100%",
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.chip,
    alignItems: "center",
  },
  toggleBtnActive: {
    backgroundColor: theme.colors.accentLilac,
  },
  toggleText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
  },
  toggleTextActive: {
    color: "#ffffff",
    fontWeight: "600",
  },
  fieldLabel: {
    alignSelf: "flex-start",
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.xs,
  },
  textField: {
    width: "100%",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    fontSize: theme.fontSize.medium,
    color: theme.colors.text,
    minHeight: 44,
  },
  saveBtn: {
    width: "100%",
    backgroundColor: theme.colors.accentLilac,
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.md,
    alignItems: "center",
    marginTop: theme.spacing.lg,
    marginBottom: 24,
  },
  saveText: {
    color: "#ffffff",
    fontSize: theme.fontSize.large,
    fontWeight: "700",
  },
});

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/font-family"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },

  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[600]
  },

  subtitle: {
    fontSize: 16,
    marginTop: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
  }
})
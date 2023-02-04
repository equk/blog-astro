import {
    defineConfig,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
    presetTypography,
} from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetTypography(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
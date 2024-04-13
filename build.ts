import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './out',
  format: 'esm',
  external: ['ws'],
  sourcemap: 'external',
  target: 'node',
  plugins: [dts()],
})

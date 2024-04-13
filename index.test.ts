import { unlinkSync } from 'node:fs'
import { expect, test } from 'bun:test'
import { getVoices, ttsSave } from '.'

test('gets voices', async () => {
  const voices = await getVoices()
  expect(voices).toBeArray()
  expect(Object.keys(voices[1])).toEqual(['Name', 'ShortName', 'Gender', 'Locale', 'SuggestedCodec', 'FriendlyName', 'Status', 'VoiceTag'])
})

test('creates a tts file', async () => {
  const path = './tts.mp3'
  if (await Bun.file(path).exists())
    unlinkSync(path)
  await ttsSave('hello world', path, { voice: 'es-VE-PaolaNeural' })
  expect(await Bun.file(path).exists()).toBe(true)
  unlinkSync(path)
})

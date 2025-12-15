const Jimp = require('jimp');
const toIco = require('to-ico');
const fs = require('fs').promises;

async function generate() {
  const src = 'public/favicon.png';
  const out = 'public/favicon.ico';
  const sizes = [16, 32, 48, 64, 128];

  const img = await Jimp.read(src);

  const buffers = await Promise.all(
    sizes.map(async (size) => {
      const clone = img.clone();
      clone.cover(size, size);
      return await clone.getBufferAsync(Jimp.MIME_PNG);
    })
  );

  const icoBuffer = await toIco(buffers);
  await fs.writeFile(out, icoBuffer);
  console.log('Created', out);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});

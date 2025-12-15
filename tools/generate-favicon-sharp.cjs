const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs').promises;

async function generate() {
  const src = 'public/favicon.png';
  const out = 'public/favicon.ico';
  const sizes = [16, 32, 48, 64, 128];

  const buffers = await Promise.all(
    sizes.map((size) =>
      sharp(src).resize(size, size, { fit: 'cover' }).png().toBuffer()
    )
  );

  const icoBuffer = await toIco(buffers);
  await fs.writeFile(out, icoBuffer);
  console.log('Created', out);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});

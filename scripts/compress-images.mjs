import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "resources/js/Shared/assets";
const outputDir = "resources/js/Shared/assets-optimized";

const allowedExt = [".jpg", ".jpeg", ".png", ".webp"];

function getFiles(dir) {
    const files = fs.readdirSync(dir);

    return files.flatMap((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            return getFiles(fullPath);
        }

        const ext = path.extname(file).toLowerCase();

        if (!allowedExt.includes(ext)) {
            return [];
        }

        return fullPath;
    });
}

async function compressImage(filePath) {
    const relativePath = path.relative(inputDir, filePath);
    const parsed = path.parse(relativePath);

    const outputPath = path.join(outputDir, parsed.dir, `${parsed.name}.webp`);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    await sharp(filePath)
        .resize({
            width: 1600,
            withoutEnlargement: true,
        })
        .webp({
            quality: 75,
        })
        .toFile(outputPath);

    console.log(`Compressed: ${filePath} -> ${outputPath}`);
}

async function run() {
    const files = getFiles(inputDir);

    for (const file of files) {
        await compressImage(file);
    }

    console.log("Done compressing images.");
}

run();

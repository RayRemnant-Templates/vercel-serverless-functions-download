
module.exports = async (req, res) => {
    const imageRes = await fetch("https://images.unsplash.com/photo-1493612276216-ee3925520721");

    let imageBuffer = Buffer.from(await imageRes.arrayBuffer())

    res.setHeader('Content-Type', 'image/jpeg'); // Set the content type

    res.status(200).send(imageBuffer);
};
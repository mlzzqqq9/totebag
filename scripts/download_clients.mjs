import fs from 'node:fs';
import path from 'node:path';

const urls = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzTWTCP3y480eA9pubjpCzOl9y2GAfbLXea9nYmO-GJz7SZxaoHwOU1voozMvKNvPh2ih82JUdtqOjSzDI4t_9rd7yp9k_kdo4TUwNBLlg2E6QizegXs66Y96NmGIhLlcNRo8rCqaDz5XNB-W35Rle7uD11oNxDWEN9SeF8vNvboC7ZoIIgRRVRHa1xGli/s1600/1.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6k-PjvlwErEuByRrlUqKRJ40O_f1MM91v_NUYWnuDSuFQ8buXUnSm041XekWHhYyN-ocixBFQ7jj_seQ5Jtj7YE6X-FT79hWJXPs3C4tPXEAfnBLUGB904WCn-KE987D0TBryF8uvz1GDMe_iDFu1U511Lu-LJw30VjF4t3snp_TwLbCgHSn3SJnHE5HT/s1600/2.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWbzFWmvvJF7cINVgFJqQuGaQHdbfsbRu5CUvQOTZ-FQfuChAgT5MXd6Hf35XfziY29z3u0HeQiZnvDn7kn5VX3UFhfLU48A8Ygh8Ca1n_ZSa3ZU_VRsWZ01N8wJW3SRsTeBDG8_kAlEsU6oytFWMeN-rx_HXmgZ8fpThdo6lGRwy018MB9qAdPOl-LqpJ/s1600/3.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTfl5cqs4qVB6mHiditSmZ_xCG5C_0Au3caHmDTC9WMJ0GSPmS-Agmco9HJ_5jz3aRSrvFx5dtFt5kML80ZNusVRdXwCvOAHxrJdax57Exv001a-Kuzwbf5kbtu29EDuqIdNddM0JhJycHJdM7RPahrddSwJwxYiHVlzL5SUsTVTfaDf8g2ajyjb05U9v8/s1600/4.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXe23ZR07avLqLZ5LRytxT7C652jcspJSwtFNxARK_yWeTCsIRCiLBBhP1A8BqGv5bTJoccPZStbJIIm6hNGTchCxy-0J3yAWBmZBsmiGeyr1fNbT8T0zi39g-3_BYESJodZLFCKCX00kL9qnOb8rdCJIWAtfrx8a53cWigG2XmtK1DO6S4-NaYl0zKEVl/s1600/5.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqxENbu0Foa6uL3NBnMfzc4K_QYklLF38rZ597Wrbd7PKn9o2V3gDQRE6mPG0yw-IEqO6dQO3ZZZ9SOsjj-TU9FW7-C9fCHm-sqDwQyh27MZ3o-JSQqzvdyT5V9Ch4h4Jq23WkFK_2bTHk3UoXo1jxjjb6R4rE4-oOiN2LPoU89N2zIBmpaaVq2a3D2cKF/s1600/6.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXNT_mvWKdFWQpDDKUvcX8F9yh0w05Ikb2TWo3tfxKV8e-3MACLDXMl1eI375uYKb-b6caofo0q8oCJ5A2fTtsTKvYW-KRnOyzSHaBzkTaUccYUd4cEhPaoV7KBaYT1bYpt7G2itHWs-BYU8pjYRKqEoWUuST5CSfPchy5a9uom69-Usylt2uFlMRDJG4s/s1600/7.png'
];

async function run() {
  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filePath = path.join(process.cwd(), 'public', 'media', `klien-${i + 1}.png`);
    fs.writeFileSync(filePath, buffer);
    console.log(`Saved klien-${i + 1}.png (${buffer.length} bytes)`);
  }
}

run();

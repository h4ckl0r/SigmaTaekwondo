import * as XLSX from 'xlsx';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const data = XLSX.readFile('testImport.xlsx');
  const worksheet = data.Sheets[data.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];

  const units = await prisma.units.findMany();
  
  const athletesData = [];
  for (let i = 1; i < jsonData.length; i++) {
    const row = jsonData[i];
    if (!row || row.length === 0 || !row[0]) continue;

    const name = String(row[0]).trim();
    const rawGender = String(row[1] || '').trim().toLowerCase();
    const rawBirthday = row[2];
    const rawUnit = String(row[3] || '').trim();

    let gender = 'NAM';
    if (rawGender.includes('nữ')) gender = 'NU';
    else if (rawGender.includes('hợp')) gender = 'HONHOP';
    else if (rawGender.includes('khác')) gender = 'KHAC';

    let birthday = new Date().toISOString();
    if (typeof rawBirthday === 'number') {
       birthday = new Date(Math.round((rawBirthday - 25569) * 86400 * 1000)).toISOString();
    } else if (typeof rawBirthday === 'string') {
       const parts = rawBirthday.split(/[-/]/);
       if (parts.length === 3) {
         if (parts[2].length === 4) {
           birthday = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).toISOString();
         } else {
           birthday = new Date(rawBirthday).toISOString();
         }
       }
    }

    let unit_id = units[0]?.id; // default
    const matchingUnit = units.find(u => u.name.toLowerCase() === rawUnit.toLowerCase());
    if (matchingUnit) {
      unit_id = matchingUnit.id;
    }

    if (!unit_id) {
       console.log(`Bỏ qua ${name} vì không có đơn vị hợp lệ.`);
       continue;
    }

    athletesData.push({
      full_name: name,
      gender,
      birthday: new Date(birthday),
      unit_id
    });
  }

  if (athletesData.length > 0) {
     const result = await prisma.athletes.createMany({
         data: athletesData
     });
     console.log(`Đã chèn thành công ${result.count} VĐV.`);
  } else {
     console.log('Không có dữ liệu hợp lệ để import.');
  }

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});

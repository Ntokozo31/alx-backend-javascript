const fs = require('fs');

function countStudents(filePath) {
  try {
      const data = fs.readFileSync(filePath, 'utf8');
      const lines = data.split('\n').filter(line => line.trim() !== '');

      const studentCounts = {};

      for (let i = 1; i < lines.length; i++) {
          const fields = lines[i].split(',');
          const firstName = fields[0].trim();
          const field = fields[1].trim();

            // Skip invalid entries
          if (!firstName || !field) continue;

            // Initialize the field in the object if it doesn't exist
          if (!studentCounts[field]) {
              studentCounts[field] = {
                  count: 0,
                  names: []
              };
          }

            // Increment the count and add the student's name
            studentCounts[field].count += 1;
            studentCounts[field].names.push(firstName);
        }

        const totalStudents = lines.length - 1; // Exclude header
        console.log(`Number of students: ${totalStudents}`);

        for (const field in studentCounts) {
            const { count, names } = studentCounts[field];
            console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}
module.exports = countStudents;
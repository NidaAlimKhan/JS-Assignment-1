
let a = 10;

document.write('<h4>Result:</h4>', '<br/>', 'The value of a is: ' + a, '<br/>', '-------------------------------------', '<br/>', 'The value of ++a is: ' + ++a, '<br/>', 'Now the value of a is: ' + a, '<br/>', 'The value of a++ is: ' + a++, '<br/>', 'Now the value of a is: ' + a, '<br/>', 'The value of --a is: ' + --a, '<br/>', 'Now the value of a is: ' + a, '<br/>', 'The value of a-- is: ' + a--, '<br/>', 'Now the value of a is: ' + a, '<br/>');
let enterYourName = prompt('Enter your name: ');
alert('Hi! ' + enterYourName);

document.write('Hi! ' + enterYourName);
let table = prompt('Table of');

if (table) {
    document.write('<h4>Table</h4>', '<br/>')
    document.write('Table of ' + table, '<br/>');
    document.write(table + 'x' + 1 + '=' + (table * 1), '<br/>', table + 'x' + 2 + '=' + (table * 2), '<br/>', table + 'x' + 3 + '=' + (table * 3), '<br/>', table + 'x' + 4 + '=' + (table * 4), '<br/>', table + 'x' + 5 + '=' + (table * 5), '<br/>', table + 'x' + 6 + '=' + (table * 6), '<br/>', table + 'x' + 7 + '=' + (table * 7), '<br/>', table + 'x' + 8 + '=' + (table * 8), '<br/>', table + 'x' + 9 + '=' + (table * 9), '<br/>', table + 'x' + 10 + '=' + (table * 10), '<br/>');
} else {
    document.write('<h4>Table</h4>', '<br/>');
    document.write('Table of ' + 5, '<br/>');
    document.write(5 + 'x' + 1 + '=' + (5 * 1), '<br/>', 5 + 'x' + 2 + '=' + (5 * 2), '<br/>', 5 + 'x' + 3 + '=' + (5 * 3), '<br/>', 5 + 'x' + 4 + '=' + (5 * 4), '<br/>', 5 + 'x' + 5 + '=' + (5 * 5), '<br/>', 5 + 'x' + 6 + '=' + (5 * 6), '<br/>', 5 + 'x' + 7 + '=' + (5 * 7), '<br/>', 5 + 'x' + 8 + '=' + (5 * 8), '<br/>', 5 + 'x' + 9 + '=' + (5 * 9), '<br/>', 5 + 'x' + 10 + '=' + (5 * 10), '<br/>');
}

alert("Hi! Let's make your Subjects marksheet!!")
let firstSubject = prompt('Enter your first Subject: ');
let firstSubjectMarks = prompt('Enter your ' + firstSubject + ' Subject Marks: ');
let secondSubject = prompt('Enter your second Subject: ');
let secondSubjectMarks = prompt('Enter your ' + secondSubject + ' Subject Marks: ');
let thirdSubject = prompt('Enter your third Subject: ');
let thirdSubjectMarks = prompt('Enter your ' + thirdSubject + ' Subject Marks: ');
let totalMarks = 100;
const totalSubjectMarks = firstSubjectMarks + secondSubjectMarks + thirdSubjectMarks;
const percentageSubjectMarks = ((totalSubjectMarks / 300) * 100);
document.write('<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr> <tr> <td>' + firstSubject + '</td> <td>' + totalMarks + '</td> <td>' + firstSubjectMarks + '</td> <td>' + ((firstSubjectMarks / totalMarks) * 100) + '%' + '</td> </tr> <tr> <td>' + secondSubject + '</td> <td>' + totalMarks + '</td> <td>' + secondSubjectMarks + '</td> <td>' + ((secondSubjectMarks / totalMarks) * 100) + '%' + '</td> </tr> <tr> <td>' + thirdSubject + '</td> <td>' + totalMarks + '</td> <td>' + thirdSubjectMarks + '</td> <td>' + ((thirdSubjectMarks / totalMarks) * 100) + '%' + '</td> </tr> <tr> <th> </th> <th>300</th> <th>' + totalSubjectMarks + '</th> <th>' + percentageSubjectMarks + '%' + '</th> </tr> </table>');

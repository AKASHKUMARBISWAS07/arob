    "let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] "
1. "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

       ['JOHN', 'BABA', 'YAGA', 'WICK']
    
ans :

    let onlyname = [];
    let n = studentRecords.length;
    for (let i = 0; i < n; i++)
    {
        onlyname.push(studentRecords[i].name.toUpperCase());
    }
    console.log(onlyname);

2.    "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

    [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

    ans :
    
    let morethn50 = studentRecords.filter
    (item => item.marks > 50);
    console.log(morethn50);


3. Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.


    ans :

     gthn120 = studentRecords.filter
    (item => item.marks > 50 && item.id > 120);
    console.log(gthn120);

4. Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

ans :

    let total = studentRecords.reduce
    ( ((acc,curr) => acc+curr.marks),0);
        console.log(total);


5. Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

ans :

    nam = studentRecords.filter
    (item => item.marks > 50).map(item => item.name);
        console.log(nam);

6.  Question 6: This time we are required to print the sum of marks of the students with id > 120.

ans: 

    summrksofid = studentRecords.filter
    (item => item.id > 120).reduce(
    ((acc,curr) => acc+curr.marks),0);
        console.log(summrksofid );

7. Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

ans :

    Grace = studentRecords.map
    (function(item)
        { 
        if(item.marks < 50)
        {
        item.marks += 15;
        }
        return item;
        })
        .filter(item => item.marks > 50)
        .reduce(
        (acc,curr) => acc+curr.marks,0
        );
    console.log(Grace);


8. Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

ans:

function Student(student_name, student_class, student_rollno)
{
    this.name = student_name,
    this.class = student_class,
    this.rollno = student_rollno
}
let student1 = new Student('Akash',(10+2),1);
console.log(student1);
let student2 = new Student('Parshuram',(14-2),(1+1));
console.log(student2);
let student3 = new Student('Subhas',(50-38),(5-2));
console.log(student3);
let student4 = new Student('Sourav',(100-88),(2+2));
console.log(student4);
let student5 = new Student('Ashwathama',(22-10),(3+1+1));
console.log(student5);
let student6 = new Student('Bheem',(112-100),(3+1+1+1));
console.log(student6);





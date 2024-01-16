let RandomISBN=Math.floor(Math.random()*23456)
let RandomAISLE=Math.floor(Math.random()*78569)

let myBaseURLAdd = "https://rahulshettyacademy.com/Library/Addbook.php"
let myBaseURLGet=`https://rahulshettyacademy.com/Library/GetBook.php?ID=${RandomISBN}${RandomAISLE}`
let muBaseURLDelete = "https://rahulshettyacademy.com/Library/DeleteBook.php"


let authernames=["Ahmad","Ammar","Kareem","Saif"]
let RandomNames=Math.floor(Math.random()*authernames.length)

   describe('API Testing', () => {
    it('test the post request ', () => {

        // this is the data i need to send
        let requestbody = {
            name:"Hello DEC",
            isbn:RandomISBN,
            aisle:RandomAISLE,
            author:authernames[RandomNames]
        }

        // this is the request
        cy.request({
            method:"POST",
            url:myBaseURLAdd,
            body:requestbody
        }).then ((theResponse)=> {
            cy.log(theResponse.body)
            cy.log(theResponse.status)

            expect(theResponse.status).eq(200)
            expect(theResponse.body.Msg).eq("successfully added")
        })
        
    });


    it('test the get request', () => {
    

        cy.request({
            method : "GET",
            url : myBaseURLGet
        }).then((theResponse)=>{
            cy.log(theResponse.body[0].book_name)
            cy.log(theResponse.body[0].author)
    
        })
     });
    

   });
    

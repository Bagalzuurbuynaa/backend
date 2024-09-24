
const users = [
    { id: 1, firstName: "John", lastNAme: "Doe"},
    { id: 2, firstName: "James", lastNAme: "Bond"}

];

exports.getUser = (request, response) => {
    const {id} = request.params;
    
    const user = suers.find((user) => user.id===Number(id));

    if(user) {
      response.status(200).json({
        user,
      });
      
    } else{
        response.status(2).send("User ${id} not exist")
    }
 };
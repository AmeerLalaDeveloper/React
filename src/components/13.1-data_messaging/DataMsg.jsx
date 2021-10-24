import { useState } from "react";
import Name from "./Name";
import Card from "./Card";
  const persons = [
 {
 name: "John",
 birthday: "1-1-1995",
 favoriteFoods: {
 meats: ["hamburgers", "sausages"],
 fish: ["salmon", "pike"],
 },
 },
 {
 name: "Mark",
 birthday: "10-5-1980",
 favoriteFoods: {
 meats: ["hamburgers", "steak", "lamb"],
 fish: ["tuna", "salmon", "barracuda"],
 },
 },
 {
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["ham", "chicken"],
 fish: ["pike"],
 },
 },
 {
 name: "Thomas",
 birthday: "1-10-1990",
 favoriteFoods: {
 meats: ["bird", "rooster"],
 fish: ["salmon"],
 },
 },
 {
 name: "Johnny",
 birthday: "1-10-1992",
 favoriteFoods: {
 meats: ["hamburgers", "lamb"],
 fish: ["anchovies", "tuna"],
 },
 },
];
const DataMsg = () => {
    const [data,setData]=useState(persons)
    const getNames=()=>{
         return  data.map(item=>item.name)
    }
       const getBefor1990=()=>{
         return  data.filter(item=>parseInt(item.birthday.split('-')[2])<1990);
    }
    return (<div>
        <Name names={getNames()}/>
        <Card persons={getBefor1990()}></Card>
     
    </div>  
    );
}
 
export default DataMsg;
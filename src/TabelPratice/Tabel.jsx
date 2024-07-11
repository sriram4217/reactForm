import { students,players } from "../constents/index.js"
import TabelCom from "../TabelPratice/TabelCom.jsx"

const Tabel=()=>{
return(
    <div>
        <h1>Student</h1>
        <TabelCom headers={["Name","Marks"]} data={students} columns={['name','marks',]}></TabelCom>
        <h1>Players</h1>
        <TabelCom headers={["Name","Runs","Location"]} data={players} columns={['name','runs','loc']} ></TabelCom>
    </div>
)
}
export default Tabel;
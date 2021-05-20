import BlogList from "./BlogList";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import {useAuth} from "./AuthContext";
import { useHistory } from "react-router";

const Home = () => {
    


    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    const { currentUser, logout } = useAuth();
    const history = useHistory;

    const verifica = () => {
        if (currentUser.email === 'admin@admin.com'){
            alert("Você é um admin")
        }else{
            alert("Você não é um admin")
        }
    }

    async function handleLogOut(){
        try{
            await logout();
            history.pushState("/");
        }catch{
            console.log('Fail');
        }
    }

    console.log(currentUser.email);

    return ( 
        <div className="App">
            <Navbar/>
            <div className="content">
                <div className="logoutDiv">
                    <label>Logado como: <strong>{currentUser.email}</strong></label>
                    <button className="datBtn" onClick={handleLogOut}>Log Out</button>
                    <button onClick={verifica}>Verifica</button>
                </div>

                <div className="home">
                    { error && <div> {error} </div> }
                    { isLoading && <div>Loading...</div>} 
                    {blogs && <BlogList blogs={blogs} title="Todos os blogs"/>}
                </div>
            </div>
            <footer class="fooder">
                <img class="josha" src="josha.jpeg" alt="lol"/>
                <img class="taliso" src="taliso.png" alt="lol"/>
            </footer>
        </div>
    );
}
 
export default Home;
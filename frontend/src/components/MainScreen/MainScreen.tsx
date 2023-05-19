import { ReactNode } from 'react';
import NavBar from '../../components/Navbar/Navbar';
interface MainScreenProps {
    children: ReactNode
}

function MainScreen(props: MainScreenProps) {

   
    return (
        <div className='w-screen h-screen flex '> 
          <NavBar/>
          {props.children}
        </div>
    )

}

export default MainScreen;
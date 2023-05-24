import { ReactNode } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import { Post } from '../../model/Post';
interface MainScreenProps {
    children: ReactNode
    postCreated?: (post: Post) => void;
}

function MainScreen(props: MainScreenProps) {


    return (
        <div className='w-screen h-screen flex '> 
          <NavBar postCreated={props.postCreated} />
             {props.children}
        </div>
    )

}

export default MainScreen;
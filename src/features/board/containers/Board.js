import AlertModal from "../components/AlertModal";
import BoardEdit from "../components/BoardEdit";
import BoardList from "../components/BoardList";
import BoardRegister from "../components/BoardRegister";
import BoardView from "../components/BoardView";
import CommentList from "../components/CommentList";

export default function Board (){
    
    return(
        <div>
            <BoardView></BoardView>
            {/* <BoardList></BoardList>
            <BoardRegister></BoardRegister>
            <CommentList></CommentList>
            <BoardEdit></BoardEdit>
             */}
             <AlertModal></AlertModal>

            

        </div>
    )
        
    
}
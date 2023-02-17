import React from 'react';
import ReactDOM from 'react-dom/client';
import Vote from './Views/Vote';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Vote title="React其实还是很好学的！" />
    </>
)



// import Dialog from './Components/Dialog';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//         <Dialog title="友情提示" content="大家出门做好个人防护" />

//         <Dialog content="我们一定要好好学React！" >
//             <button>确定</button>
//             <button>很确定</button>
//         </Dialog>
//     </>
// )


import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './ui_component/Header';
import Navbar from './ui_component/Navbar';
import PageContent from './ui_component/PageContent';
import Students from './ui_component/Students';
import Footer from './ui_component/Footer';
import "./main.css"
function UiApp() {
  let amount = 2000;
  let cartCount = 2;

  let programmers = [
    {name: 'john', score:48},
    {name: 'ola', score:30},
    {name: 'yemi', score:45},
    {name: 'sule', score:23},
    {name: 'Goke', score:15},
    {name: 'Yemisi', score:49}
  ]

  let students = ['munachi','ade','muhiz','segun'];
  

//Every functional component must return a jsx
return (
  <div className='container bg-warning'>
    <Header amt = {amount} cc = {cartCount}></Header>
    <Navbar xyz = {amount} cartCount={cartCount} ></Navbar>
    <PageContent students={students}></PageContent>
    <Students></Students>
    <Footer></Footer>
  </div>
)
} //Name of the file and this must start with capital 'A'

export default UiApp;

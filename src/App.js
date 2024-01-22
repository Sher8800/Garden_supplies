import './App.css';
import HeaderPage from './pages/headerPage/HeaderPage'
import HomePage from './pages/router/HomePage'
import FooterPage from './pages/footerPage/FooterPage'
import CategoriesPage from './pages/router/CategoriesPage'
import NotFounPage from './pages/router/NotFoundPage';


function App() {
  return (
    <div className="App">
      <HeaderPage />
      <HomePage />
      <CategoriesPage />
      <NotFounPage />
      <FooterPage />
    </div>
  )
}

export default App;



// "1) Реализовать Главную страницу учитывая стилизацию в макете. (хедер и футер в том числе) (не учитывая раздел Sale)
// 2) Реализоввать странице с списоком категорий
// 3) Реализовать страницу NotFound"
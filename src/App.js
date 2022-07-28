import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './views/home/Home';
import Login from './views/log/Login';
import NewsBox from './views/news/NewsBox';
import UserList from './views/userlist/UserList';
import RoleList from './views/rolelist/RoleList';
import RightList from './views/rightlist/RightList';
import NoPermission from './components/NoPermission';
import 'antd/dist/antd.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace />}></Route>
        <Route exact path={'/'} element={<NewsBox />}>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/userlist'} element={<UserList />} />
          <Route path={'/rolelist'} element={<RoleList />} />
          <Route path={'/rightlist'} element={<RightList />} />
        </Route>
        <Route exact path={'/login'} element={<Login />}></Route>
        <Route exact path={'*'} element={<NoPermission />}></Route>
      </Routes>
  );
}

export default App;

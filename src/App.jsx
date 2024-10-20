import './App.css'
import { Button } from 'antd';
import { Flex, Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MySidebar from './components/MySidebar';
const { Header, Footer, Sider, Content } = Layout;

function App() {

  return (
    <>
      <Layout className='rounded-lg flex justify-center overflow-hidden '>
        <Header className=' text-white h-16 px-12 leading-[64px] bg-[#4096ff] items-center'>
          <Navbar />
        </Header>
        <Layout>
          <Sider className='text-center leading-[120px] text-white bg-[#1677ff] flex justify-center w-1/4'>
            <Sidebar />
          </Sider>
          <Layout >
            <Content className='text-center min-h-[120px] leading-[120px] text-white bg-[#0958d9] flex justify-center'>Content</Content>
            <Footer className='text-center text-white bg-[#4096ff] flex justify-center'>Footer</Footer>
          </Layout>
          <Sider>
            <MySidebar />
          </Sider>
        </Layout>
      </Layout>

      <br />
      {/* 
      <div>
        <header className="bg-[#4096ff] text-white text-center h-16 px-12 flex items-center justify-center">
          <h1>Header</h1>
        </header>
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row h-screen">
            <div className="bg-[#1677ff] text-white text-center md:w-1/4 flex items-center justify-center">
              <h2 className="leading-[120px]">Sider</h2>
            </div>
            <main className="flex-grow bg-[#0958d9] text-white text-center leading-[120px]">
              <h2>Content</h2>
            </main>
          </div>
          <footer className="bg-[#4096ff] text-white text-center h-16 flex items-center justify-center">
            <h2>Footer</h2>
          </footer>
        </div>
      </div> */}
    </>
  )
}

export default App

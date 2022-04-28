import React from //useState //useEffect,
"react";
//import logo from "./logo.svg";
import {
  //   ConfigProvider,
  //   BottomPane,
  //   Button,
  //   CheckeableItem,
  //   Col,
  //   Content,
  //   Header,
  //   HeaderEndContent,
  //   isIconFill,
  //   Layout,
  //   LogoutButton,
  //   Menu,
  //   MenuItem,
  //   Option,
  //   PageHeaderSubtitle,
  //   PageHeaderTitle,
  //   Row,
  Select,
  // Upload,
  // UploadButtonContent,
  // UploadChangeParam,
  // UploadFile,
  // UploadProps,
  //   Sider,
  //   SiderHeader,
  //   SubMenu,
  //   Tag,
} from "fave-ui";

//import { Select } from "antd";

//import { Handshake, Person } from "phosphor-react";

//import "antd/dist/antd.css";
//import "./App.css";
//import "tailwindcss/tailwind.css";
//import { default as WithAntIconSpan } from "fave-ui/dist/cjs/HOCs";

require("react-dom");
// @ts-ignore
window.React2 = require("react");
// @ts-ignore
console.log(window.React1, window.React2);
// @ts-ignore
console.log(window.React1 === window.React2);

// type PictureItem = UploadFile<{}>;

// type Args = UploadProps<PictureItem> & {
//   label: string;
//   text?: string;
// };

// const initialList: UploadFile<PictureItem>[] = [
//   {
//     uid: "-1",
//     name: "image.png",
//     status: "done",
//     url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//   },
//   {
//     uid: "-2",
//     name: "image.png",
//     status: "done",
//     url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//   },
//   {
//     uid: "-3",
//     name: "image.png",
//     status: "done",
//     url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//   },
//   {
//     uid: "-4",
//     name: "image.png",
//     status: "done",
//     url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//   },
//   {
//     uid: "-xxx",
//     percent: 50,
//     name: "image.png",
//     status: "uploading",
//     url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//   },
//   {
//     uid: "-5",
//     name: "image.png",
//     status: "error",
//   },
// ];

// const getList = () =>
//   initialList.map((item) => {
//     return { ...item };
//   });

// const subMenuItems = [
//   {
//     key: "sub1",
//     Icon: Handshake,
//     title: "Merchant Connect",
//     subItems: [
//       {
//         key: "1",
//         title: "My Merchants",
//       },
//       {
//         key: "2",
//         title: "My Submissions",
//       },
//       {
//         key: "3",
//         title: "My Drafts",
//       },
//       {
//         key: "4",
//         title: "My Attentions",
//       },
//     ],
//   },
//   {
//     key: "sub2",
//     Icon: Person,
//     title: "User",
//     subItems: [
//       {
//         key: "5",
//         title: "Tom",
//       },
//       {
//         key: "6",
//         title: "Bill",
//       },
//       {
//         key: "7",
//         title: "Alex",
//       },
//     ],
//   },
// ];

// const rootSubmenuKeys = subMenuItems.map((item) => item.key);

function App() {
  // const [collapsed, setCollapsed] = useState(true);
  // const [openKeys, setOpenKeys] = React.useState<string[]>([]);
  // const [selectedKeyPath, setSelectedKeyPath] = React.useState<string[]>([
  //   "sub1",
  //   "1",
  // ]);

  // const [selectedCountry, setSelectedCountry] = useState("MY");

  // const [fileList, setFileList] = useState<UploadFile<PictureItem>[]>(
  //   getList()
  // );

  // useEffect(() => {
  //   setFileList(fileList)
  // }, [])

  // const handleChange = ({ fileList }: UploadChangeParam<PictureItem>) => {
  //   console.log(fileList);
  //   //setFileList(fileList);
  // };

  // const handleMenuOpen = (keys: any) => {
  //   const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) setOpenKeys(keys);
  //   else setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  // };

  // const handleLogoutClick = () => {};
  // const isStaging = true;

  return (
    // <Tag color={"success"}>ia-staging</Tag>

    <div
      className="cls"
      style={{
        width: 240,
        height: 240,
        //background: "#c4c4c4",
      }}
    >
      <div className="nested"></div>
      <button>Hi</button>
      {/* <Upload
        fileList={initialList}
        listType="picture-card"
        onChange={handleChange}
      >
        <UploadButtonContent>Hi</UploadButtonContent>
      </Upload> */}
      <Select
        defaultValue="SG"
        placeholder="Search"
        bordered={false}
        showArrow={true}
        options={[
          { label: "Poland", value: "PL" },
          { label: "Malaysia", value: "MY" },
          { label: "Singapore", value: "SG" },
          { label: "Indonesia", value: "In" },
          { label: "India", value: "ID" },
          { label: "Vietname", value: "VT" },
        ]}
      />
    </div>

    // <ConfigProvider>
    //   <div className="App">
    //     <Layout style={{ height: 600 }}>
    //       <Sider trigger={null} collapsible collapsed={collapsed}>
    //         <SiderHeader
    //           text={"Katelyn Soo"}
    //           collapsed={collapsed}
    //           setCollapsed={setCollapsed}
    //         />

    //         <Menu
    //           mode="inline"
    //           defaultSelectedKeys={selectedKeyPath}
    //           inlineIndent={16}
    //           openKeys={openKeys}
    //           onOpenChange={handleMenuOpen}
    //           onSelect={(selectionInfo) =>
    //             setSelectedKeyPath(selectionInfo.keyPath)
    //           }
    //         >
    //           {subMenuItems.map((item) => (
    //             <SubMenu
    //               key={item.key}
    //               icon={
    //                 <item.Icon weight={isIconFill(selectedKeyPath, item.key)} />
    //                 // <WithAntIconSpan
    //                 //   icon={
    //                 //     <item.Icon
    //                 //       weight={isIconFill(selectedKeyPath, item.key)}
    //                 //     />
    //                 //   }
    //                 // />
    //               }
    //               title="Merchant Connect"
    //             >
    //               {item.subItems.map((sub) => (
    //                 <MenuItem key={sub.key}>{sub.title}</MenuItem>
    //               ))}
    //             </SubMenu>
    //           ))}
    //         </Menu>

    //         <BottomPane>
    //           <LogoutButton onClick={handleLogoutClick} />
    //         </BottomPane>
    //       </Sider>
    //       <Layout className={isStaging ? "staging" : ""}>
    //         <Header>
    //           <HeaderEndContent>
    //             {isStaging && <Tag color={"success"}>ia-staging</Tag>}
    //             <Select
    //               style={{ width: 110 }}
    //               defaultValue={selectedCountry}
    //               optionLabelProp={"label"}
    //               bordered={false}
    //               dropdownMatchSelectWidth={false}
    //               showArrow
    //               onChange={(value) => setSelectedCountry(value)}
    //               // need to keep
    //               // options={[
    //               //   { label: 'Malaysia', value: 'MY' },
    //               //   { label: 'Singapore', value: 'SG' },
    //               //   { label: 'Indonesia', value: 'ID' },
    //               //   { label: 'India', value: 'IN' }
    //               // ]}
    //             >
    //               {[
    //                 { label: "Malaysia", value: "MY" },
    //                 { label: "Singapore", value: "SG" },
    //                 { label: "Indonesia", value: "ID" },
    //                 { label: "India", value: "IN" },
    //               ].map((item) => (
    //                 <Option
    //                   key={item.value}
    //                   value={item.value}
    //                   label={item.label}
    //                 >
    //                   <CheckeableItem>{item.label}</CheckeableItem>
    //                 </Option>
    //               ))}
    //             </Select>
    //           </HeaderEndContent>
    //         </Header>
    //         <Content style={{ margin: "0 16px" }}>
    //           <Row>
    //             <Col offset={1} span={22}>
    //               <PageHeaderTitle>My Merchants</PageHeaderTitle>
    //               <PageHeaderSubtitle>
    //                 Here is the list of merchants you are working with.
    //               </PageHeaderSubtitle>
    //             </Col>
    //           </Row>
    //         </Content>
    //         {/* need to keep */}
    //         {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    //       </Layout>
    //     </Layout>
    //   </div>
    // </ConfigProvider>

    // <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <Button type="primary">asdfs dsfd f</Button>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
  );
}

export default App;

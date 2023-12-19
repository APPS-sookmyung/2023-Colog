import * as S from "./Sidebar.style";
import profileImage from "../../assets/img/profile_photo.png";

const Sidebar = () => {
  const linkList = [
    "https://ajeong7038.tistory.com",
    "https://github.com/ajung7038",
  ];
  return (
    <S.Sidebar>
      <S.SidebarProfileImage
        src={profileImage}
        alt="profileImage"
      ></S.SidebarProfileImage>
      <S.SidebarName>Ajeong Joo</S.SidebarName>
      <S.SidebarLine></S.SidebarLine>
      <S.SidebarIntroduce>집 가고 싶어요...</S.SidebarIntroduce>
      <S.SidebarLink>
        {linkList.map((link, index) => (
          // target="_blank: 새 창이나 탭에서 링크 열기 / _self: 현재 창에서 링크 열기"
          // rel="noopener noreferrer" : 새 창에서 외부 링크를 열 때 권장되는 보안 사항
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            {link} <br />
          </a>
        ))}
      </S.SidebarLink>
    </S.Sidebar>
  );
};

export default Sidebar;

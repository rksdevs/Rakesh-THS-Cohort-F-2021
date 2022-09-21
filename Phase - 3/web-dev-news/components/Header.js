import headerStyles from "../styles/Header.module.css";
const Header = () => {
  //   const x = 4;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web Dev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up with the latest web development news
      </p>
      {/* <style jsx> // inline styling mostly use for conditional css
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
};
export default Header;

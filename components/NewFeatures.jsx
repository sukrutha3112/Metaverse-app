import styles from '../styles';

const NewFeatures = ({ number, title, url, sub }) => (
  <div>
    <a href={url}> 
      <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div></a>
    <p className="flex-1 ml-[50px] font-normal text-[18px] text-[#B0B0B0] ">
      {title}
    </p>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0]">
      {sub}
    </p>
  </div>
);

export default NewFeatures;

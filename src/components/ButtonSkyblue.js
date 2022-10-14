import Button from './Button';

export default function ButtonSkyblue({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#7EDCFA"
      subColor="#3A82E0"
      hoverColor="#CFECF2"
    />
  );
}

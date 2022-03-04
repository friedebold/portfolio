interface SpacerProps {
  height?: number;
  width?: number;
}
export const Spacer: React.FC<SpacerProps> = ({ height, width }) => {
  return (
    <div
      style={{ height: height ? height : 0, width: width ? width : 0 }}
    ></div>
  );
};

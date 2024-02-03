

export const ErrorMessage = ({ msg }: { msg: string }) => {
  return msg ? (
    <span className="text-red-700 font-semibold text-xs pt-1">{msg}</span>
  ) : null;
};

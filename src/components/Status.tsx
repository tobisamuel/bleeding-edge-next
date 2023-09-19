type Props = {
  status: string;
};

const obj = {
  success: "COMPLETED",
  pending: "PENDING",
  failed: "FAILED",
};

const Status = ({ status }: Props) => {
  switch (status) {
    case obj.success:
      return (
        <span className="flex w-fit items-center gap-1 justify-self-center rounded-md bg-[#F6FDF9] px-2 py-1 text-[10px] text-green-500 lg:text-xs">
          Completed
        </span>
      );
    case obj.pending:
      return (
        <span className="flex w-fit items-center gap-1 justify-self-center rounded-md px-2 py-1 text-[10px] text-yellow-500 lg:text-xs">
          Pending
        </span>
      );
    case obj.failed:
      return (
        <span className="flex w-fit items-center gap-1 justify-self-center rounded-md bg-[#F7A491]/10 px-2 py-1 text-[10px] text-red-500 lg:text-xs">
          Failed
        </span>
      );
    default:
      return <span className="text-sm text-green-500">{status}</span>;
  }
};

export default Status;

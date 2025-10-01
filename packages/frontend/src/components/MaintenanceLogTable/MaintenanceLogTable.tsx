import { DataGrid } from "@mui/x-data-grid";

type MaintenanceLogTableProps = {
  rows: {
    id: string;
    tag: string;
    type: string;
    latest_maintenance_date: string;
    performed_by: string;
    status: string;
    severity: string;
    tags: string[];
  }[];
  isLoading?: boolean;
  isError?: boolean;
};

export default function MaintenanceLogTable({
  rows,
  isLoading = false,
  isError = false,
}: MaintenanceLogTableProps) {
  if (isError) return <div>Error loading maintenance logs.</div>;
  return (
    <DataGrid
      rows={rows}
      loading={isLoading}
      columns={[
        { field: "tag", headerName: "Equipment" },
        { field: "type", headerName: "Type" },
        { field: "latest_maintenance_date", headerName: "Date" },
        { field: "performed_by", headerName: "Technician" },
        { field: "status", headerName: "Status" },
        { field: "severity", headerName: "Severity" },
        { field: "tags", headerName: "Tags" },
      ]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
    />
  );
}

import type { Meta, StoryObj } from "@storybook/react-vite";
import MaintenanceLogTable from "./MaintenanceLogTable";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: MaintenanceLogTable,
} satisfies Meta<typeof MaintenanceLogTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: [
      {
        id: "1",
        tag: "Equipment A",
        type: "Type A",
        latest_maintenance_date: "2023-01-01",
        performed_by: "Technician A",
        status: "Completed",
        severity: "Low",
        tags: ["tag1", "tag2"],
      },
      {
        id: "2",
        tag: "Equipment B",
        type: "Type B",
        latest_maintenance_date: "2023-02-01",
        performed_by: "Technician B",
        status: "Pending",
        severity: "High",
        tags: ["tag3"],
      },
      {
        id: "3",
        tag: "Equipment C",
        type: "Type C",
        latest_maintenance_date: "2023-03-01",
        performed_by: "Technician C",
        status: "In Progress",
        severity: "Medium",
        tags: ["tag1", "tag4"],
      },
      {
        id: "4",
        tag: "Equipment D",
        type: "Type D",
        latest_maintenance_date: "2023-04-01",
        performed_by: "Technician D",
        status: "Completed",
        severity: "Low",
        tags: [],
      },
      {
        id: "5",
        tag: "Equipment E",
        type: "Type E",
        latest_maintenance_date: "2023-05-01",
        performed_by: "Technician E",
        status: "Pending",
        severity: "High",
        tags: ["tag2", "tag3"],
      },
      {
        id: "6",
        tag: "Equipment F",
        type: "Type F",
        latest_maintenance_date: "2023-06-01",
        performed_by: "Technician F",
        status: "In Progress",
        severity: "Medium",
        tags: ["tag4"],
      },
    ],
  },
};
export const Loading: Story = {
  args: {
    rows: [],
    isLoading: true,
  },
};
export const Empty: Story = {
  args: {
    rows: [],
  },
};
export const Error: Story = {
  args: {
    rows: [],
    isLoading: false,
    isError: true,
  },
};

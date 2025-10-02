import { pgSchema, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";

/** Data model for managing maintenance logs, equipment, locations, and related entities. */
export const maintenanceLog = pgSchema("maintenance_log");

export const equipments = maintenanceLog.table("equipments", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  equipment_type_id: uuid("equipment_type_id").notNull().references(() => equipmentTypes.id),
  location_id: uuid("location_id").notNull().references(() => locations.id),
  tag: text("tag").notNull(),
  created_at: timestamp("created_at", { withTimezone: true,  }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  created_by: text("created_by").notNull(),
  updated_by: text("updated_by").notNull(),
  enabled: integer("enabled").notNull()
});

export const locations = maintenanceLog.table("locations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  building: text("building").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  created_by: text("created_by").notNull(),
  updated_by: text("updated_by").notNull(),
  enabled: integer("enabled").notNull()
});

export const equipmentTypes = maintenanceLog.table("equipment_types", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  created_by: text("created_by").notNull(),
  updated_by: text("updated_by").notNull(),
  enabled: integer("enabled").notNull()
});

export const maintenanceLogs = maintenanceLog.table("maintenance_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  equipment_id: uuid("equipment_id").notNull().references(() => equipments.id),
  maintenance_date: timestamp("maintenance_date", { withTimezone: true }).notNull(),
  type: text("type").notNull(),
  description: text("description").notNull(),
  severity: text("severity").notNull(),
  performed_by: text("performed_by").notNull(),
  tags: text("tags"),
  status: text("status").notNull(),
  next_maintenance_date: timestamp("next_maintenance_date", { withTimezone: true }),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  created_by: text("created_by").notNull(),
  updated_by: text("updated_by").notNull(),
  enabled: integer("enabled").notNull()
});

export const attachments = maintenanceLog.table("attachments", {
  id: uuid("id").primaryKey().defaultRandom(),
  entity: text("entity").notNull(),
  entity_id: text("entity_id").notNull(),
  url: text("url").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  created_by: text("created_by").notNull(),
  updated_by: text("updated_by").notNull(),
  enabled: integer("enabled").notNull()
});

export const comments = maintenanceLog.table("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  equipment_id: uuid("equipment_id").notNull().references(() => equipments.id),
  comment: text("comment").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  created_by: text("created_by").notNull(),
  updated_by: text("updated_by").notNull(),
  enabled: integer("enabled").notNull()
});
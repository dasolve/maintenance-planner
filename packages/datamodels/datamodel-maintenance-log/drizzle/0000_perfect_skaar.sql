CREATE SCHEMA "maintenance_log";
--> statement-breakpoint
CREATE TABLE "maintenance_log"."attachments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entity" text NOT NULL,
	"entity_id" text NOT NULL,
	"url" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"updated_by" text NOT NULL,
	"enabled" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "maintenance_log"."comments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"equipment_id" uuid NOT NULL,
	"comment" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"updated_by" text NOT NULL,
	"enabled" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "maintenance_log"."equipment_types" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"updated_by" text NOT NULL,
	"enabled" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "maintenance_log"."equipments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"equipment_type_id" uuid NOT NULL,
	"location_id" uuid NOT NULL,
	"tag" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"updated_by" text NOT NULL,
	"enabled" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "maintenance_log"."locations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"building" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"updated_by" text NOT NULL,
	"enabled" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "maintenance_log"."maintenance_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"equipment_id" uuid NOT NULL,
	"maintenance_date" timestamp with time zone NOT NULL,
	"type" text NOT NULL,
	"description" text NOT NULL,
	"severity" text NOT NULL,
	"performed_by" text NOT NULL,
	"tags" text,
	"status" text NOT NULL,
	"next_maintenance_date" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"updated_by" text NOT NULL,
	"enabled" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "maintenance_log"."comments" ADD CONSTRAINT "comments_equipment_id_equipments_id_fk" FOREIGN KEY ("equipment_id") REFERENCES "maintenance_log"."equipments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "maintenance_log"."equipments" ADD CONSTRAINT "equipments_equipment_type_id_equipment_types_id_fk" FOREIGN KEY ("equipment_type_id") REFERENCES "maintenance_log"."equipment_types"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "maintenance_log"."equipments" ADD CONSTRAINT "equipments_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "maintenance_log"."locations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "maintenance_log"."maintenance_logs" ADD CONSTRAINT "maintenance_logs_equipment_id_equipments_id_fk" FOREIGN KEY ("equipment_id") REFERENCES "maintenance_log"."equipments"("id") ON DELETE no action ON UPDATE no action;
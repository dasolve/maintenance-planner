import { db } from ".";
import { equipments, equipmentTypes, locations } from "./schema";

const generatorId = Bun.randomUUIDv7();
const freezerId = Bun.randomUUIDv7();
const conveyorId = Bun.randomUUIDv7();
const packagingId = Bun.randomUUIDv7();
const boilerId = Bun.randomUUIDv7();

const equipmentTypeMocks: (typeof equipmentTypes.$inferInsert)[] = [
  {
    id: generatorId,
    name: "Generator",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
  {
    id: freezerId,
    name: "Freezer",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
  {
    id: conveyorId,
    name: "Conveyor Belt",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
  {
    id: packagingId,
    name: "Packaging Machine",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
  {
    id: boilerId,
    name: "Boiler",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
];

await db.insert(equipmentTypes).values(equipmentTypeMocks);

const processingHallId = Bun.randomUUIDv7();
const freezerRoomId = Bun.randomUUIDv7();
const packagingAreaId = Bun.randomUUIDv7();
const locationId = Bun.randomUUIDv7();

const locationMocks: (typeof locations.$inferInsert)[] = [
  {
    id: locationId,
    name: "Location A",
    building: "Building 1",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
  {
    id: processingHallId,
    name: "Processing Hall",
    building: "Building 1",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
  {
    id: freezerRoomId,
    name: "Freezer Room",
    building: "Building 2",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
  {
    id: packagingAreaId,
    name: "Packaging Area",
    building: "Building 3",
    created_by: "system",
    updated_by: "system",
    enabled: 1,
  },
];

await db.insert(locations).values(locationMocks);

await db.insert(equipments).values([
  {
    name: "Generator A",
    tag: "GEN-A",
    location_id: locationId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: generatorId,
    enabled: 1,
  },
  {
    name: "Industrial Freezer Unit 1",
    tag: "FRZ-001",
    location_id: freezerRoomId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: freezerId,
    enabled: 1,
  },
  {
    name: "Industrial Freezer Unit 2",
    tag: "FRZ-002",
    location_id: freezerRoomId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: freezerId,
    enabled: 1,
  },
  {
    name: "Main Conveyor Belt",
    tag: "CNV-001",
    location_id: processingHallId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: conveyorId,
    enabled: 1,
  },
  {
    name: "Secondary Conveyor Belt",
    tag: "CNV-002",
    location_id: processingHallId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: conveyorId,
    enabled: 1,
  },
  {
    name: "Packaging Line 1",
    tag: "PKG-001",
    location_id: packagingAreaId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: packagingId,
    enabled: 1,
  },
  {
    name: "Packaging Line 2",
    tag: "PKG-002",
    location_id: packagingAreaId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: packagingId,
    enabled: 1,
  },
  {
    name: "Steam Boiler Unit 1",
    tag: "BLR-001",
    location_id: locationId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: boilerId,
    enabled: 1,
  },
  {
    name: "Backup Generator",
    tag: "GEN-B",
    location_id: locationId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: generatorId,
    enabled: 1,
  },
  {
    name: "Sorting Conveyor",
    tag: "CNV-003",
    location_id: processingHallId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: conveyorId,
    enabled: 1,
  },
  {
    name: "Blast Freezer",
    tag: "FRZ-003",
    location_id: freezerRoomId,
    created_by: "system",
    updated_by: "system",
    equipment_type_id: freezerId,
    enabled: 1,
  },
]);

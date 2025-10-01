# Maintenance Log Data Model

## Tables

### Equipments

| Column Name       | Data Type | Description                                                    |
| ----------------- | --------- | -------------------------------------------------------------- |
| id                | uuid      | Unique identifier for the equipment. It may be auto generated. |
| name              | string    | Name of the equipment.                                         |
| equipment_type_id | uuid      | Identifier of the equipment type.                              |
| location_id       | uuid      | Location of the equipment.                                     |
| tag               | string    | Tag or identifier for the equipment.                           |
| created_at        | timestamp | Timestamp when the record was created.                         |
| updated_at        | timestamp | Timestamp when the record was last updated.                    |
| created_by        | uuid      | Identifier of the user who created the record.                 |
| updated_by        | uuid      | Identifier of the user who last updated the record.            |
| enabled           | boolean   | Indicates if the record is active or soft-deleted.             |

### Locations

| Column Name | Data Type | Description                                                   |
| ----------- | --------- | ------------------------------------------------------------- |
| id          | uuid      | Unique identifier for the location. It may be auto generated. |
| name        | string    | Name of the location.                                         |
| building    | string    | Building of the location.                                     |
| created_at  | timestamp | Timestamp when the record was created.                        |
| updated_at  | timestamp | Timestamp when the record was last updated.                   |
| created_by  | uuid      | Identifier of the user who created the record.                |
| updated_by  | uuid      | Identifier of the user who last updated the record.           |
| enabled     | boolean   | Indicates if the record is active or soft-deleted.            |

### EquipmentTypes

| Column Name | Data Type | Description                                                         |
| ----------- | --------- | ------------------------------------------------------------------- |
| id          | uuid      | Unique identifier for the equipment type. It may be auto generated. |
| name        | string    | Name of the equipment type.                                         |
| created_at  | timestamp | Timestamp when the record was created.                              |
| updated_at  | timestamp | Timestamp when the record was last updated.                         |
| created_by  | uuid      | Identifier of the user who created the record.                      |
| updated_by  | uuid      | Identifier of the user who last updated the record.                 |
| enabled     | boolean   | Indicates if the record is active or soft-deleted.                  |

### MaintenanceLogs

| Column Name           | Data Type | Description                                                          |
| --------------------- | --------- | -------------------------------------------------------------------- |
| id                    | uuid      | Unique identifier for the maintenance log. It may be auto generated. |
| equipment_id          | uuid      | Identifier of the equipment associated with the maintenance log.     |
| maintenance_date      | timestamp | Date when the maintenance was performed.                             |
| type                  | string    | Type of maintenance performed.                                       |
| description           | text      | Description of the maintenance work done.                            |
| severity              | string    | Severity level of the maintenance issue (e.g., low, medium, high).   |
| performed_by          | string    | Id of the user who performed the maintenance.                        |
| tags                  | string[]  | Array of tags associated with the maintenance log.                   |
| status                | string    | Status of the maintenance (e.g., completed, pending).                |
| next_maintenance_date | timestamp | Date when the next maintenance is scheduled.                         |
| created_at            | timestamp | Timestamp when the record was created.                               |
| updated_at            | timestamp | Timestamp when the record was last updated.                          |
| created_by            | uuid      | Identifier of the user who created the record.                       |
| updated_by            | uuid      | Identifier of the user who last updated the record.                  |
| enabled               | boolean   | Indicates if the record is active or soft-deleted.                   |

### Attachments

| Column Name | Data Type | Description                                                                                   |
| ----------- | --------- | --------------------------------------------------------------------------------------------- |
| id          | uuid      | Unique identifier for the attachment. It may be auto generated.                               |
| entity      | string    | The entity type the attachment is associated with (e.g., MaintenanceLog, Equipment, Comment). |
| entity_id   | uuid      | Identifier of the associated entity.                                                          |
| url         | string    | URL of the attachment.                                                                        |
| name        | string    | Name of the attachment.                                                                       |
| description | text      | Description of the attachment.                                                                |
| created_at  | timestamp | Timestamp when the record was created.                                                        |
| updated_at  | timestamp | Timestamp when the record was last updated.                                                   |
| created_by  | uuid      | Identifier of the user who created the record.                                                |
| updated_by  | uuid      | Identifier of the user who last updated the record.                                           |
| enabled     | boolean   | Indicates if the record is active or soft-deleted.                                            |

### Comments

| Column Name  | Data Type | Description                                                  |
| ------------ | --------- | ------------------------------------------------------------ |
| id           | uuid      | Unique identifier for the comment. It may be auto generated. |
| equipment_id | uuid      | Identifier of the equipment associated with the comment.     |
| comment      | text      | Content of the comment.                                      |
| created_at   | timestamp | Timestamp when the record was created.                       |
| updated_at   | timestamp | Timestamp when the record was last updated.                  |
| created_by   | uuid      | Identifier of the user who created the record.               |
| updated_by   | uuid      | Identifier of the user who last updated the record.          |
| enabled      | boolean   | Indicates if the record is active or soft-deleted.           |

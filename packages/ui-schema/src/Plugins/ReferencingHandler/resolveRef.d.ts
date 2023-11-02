import { ParseRefsContent, StoreSchemaType } from '@xy-form/ui-schema'

export class SchemaRefPending extends Error {
}

export function resolveRef(ref: string, context: ParseRefsContent, schemaVersion?: string): StoreSchemaType

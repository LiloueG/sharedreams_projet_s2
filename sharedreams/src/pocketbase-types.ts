/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Dreams = "dreams",
	Friend = "friend",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum DreamsDreamnightOptions {
	"dream" = "dream",
	"nightmare" = "nightmare",
}

export enum DreamsEmojisOptions {
	"happy" = "happy",
	"heart" = "heart",
	"sad" = "sad",
	"tired" = "tired",
	"scared" = "scared",
}
export type DreamsRecord = {
	dream?: string
	dreamnight?: DreamsDreamnightOptions
	emojis?: DreamsEmojisOptions
	user?: RecordIdString
}

export type FriendRecord = {
	users_friend?: RecordIdString[]
}

export type UsersRecord = {
	avatar?: string
	biography?: string
	friend?: RecordIdString[]
	mail?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type DreamsResponse<Texpand = unknown> = Required<DreamsRecord> & BaseSystemFields<Texpand>
export type FriendResponse<Texpand = unknown> = Required<FriendRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	dreams: DreamsRecord
	friend: FriendRecord
	users: UsersRecord
}

export type CollectionResponses = {
	dreams: DreamsResponse
	friend: FriendResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'dreams'): RecordService<DreamsResponse>
	collection(idOrName: 'friend'): RecordService<FriendResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}

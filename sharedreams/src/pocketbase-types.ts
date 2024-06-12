/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Comments = "comments",
	Dreams = "dreams",
	Messages = "messages",
	SleepData = "sleepData",
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

export type CommentsRecord = {
	dream_id?: RecordIdString
	text?: string
	user_id?: RecordIdString[]
}

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
	like?: RecordIdString[]
	user?: RecordIdString
}

export type MessagesRecord = {
	content?: string
	receive?: RecordIdString[]
	send?: RecordIdString[]
	timestamp?: IsoDateString
}

export type SleepDataRecord = {
	day?: IsoDateString
	sleepHours?: number
	sleepQuality?: string
	sleepUser?: RecordIdString
}

export type UsersRecord = {
	avatar?: string
	biography?: string
	mail?: boolean
	user_friend?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type CommentsResponse<Texpand = unknown> = Required<CommentsRecord> & BaseSystemFields<Texpand>
export type DreamsResponse<Texpand = unknown> = Required<DreamsRecord> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> & BaseSystemFields<Texpand>
export type SleepDataResponse<Texpand = unknown> = Required<SleepDataRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	comments: CommentsRecord
	dreams: DreamsRecord
	messages: MessagesRecord
	sleepData: SleepDataRecord
	users: UsersRecord
}

export type CollectionResponses = {
	comments: CommentsResponse
	dreams: DreamsResponse
	messages: MessagesResponse
	sleepData: SleepDataResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'comments'): RecordService<CommentsResponse>
	collection(idOrName: 'dreams'): RecordService<DreamsResponse>
	collection(idOrName: 'messages'): RecordService<MessagesResponse>
	collection(idOrName: 'sleepData'): RecordService<SleepDataResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}

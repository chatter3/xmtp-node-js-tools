export type FramePostUntrustedData = {
  walletAddress: string // Untrusted version of the wallet address
  url: string // Frame URL. May be different from the `post_url` this is being sent to
  timestamp: number // Timestamp in milliseconds
  buttonIndex: number // 1-indexed button that was clicked
  opaqueConversationIdentifier: string // A hash of the conversation topic and the participants
}

export type FramePostTrustedData = {
  messageBytes: string
}

export type FramePostPayload = {
  untrustedData: FramePostUntrustedData
  trustedData: FramePostTrustedData
}

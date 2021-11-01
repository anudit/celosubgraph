import { BigInt } from "@graphprotocol/graph-ts"
import { AttestationCompleted } from "../generated/Attestations/Attestations"
import { AttestationsCompleted } from "../generated/schema"

export function handleAttestationCompleted(event: AttestationCompleted): void {

  let entity = AttestationsCompleted.load(event.params.account.toHexString())

  if (!entity) {
    entity = new AttestationsCompleted(event.params.account.toHexString())
    entity.count = BigInt.fromI32(0);
  }

  entity.count = entity.count.plus(BigInt.fromI32(1));
  entity.save();

}

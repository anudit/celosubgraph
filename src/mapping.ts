import { AttestationRegistered, AttestationRevoked } from "../generated/Attestations/Attestations"
import { Attestation } from "../generated/schema"

export function handleAttestationRegistered(event: AttestationRegistered): void {

  let entity = Attestation.load(event.params.identifier.toHexString())

  if (!entity) {
    entity = new Attestation(event.params.identifier.toHexString())
  }

  entity.txnHash = event.transaction.hash;
  entity.account = event.params.account;
  entity.identifier = event.params.identifier;
  entity.issuer = event.params.issuer;
  entity.signer = event.params.signer;
  entity.issuedOn = event.params.issuedOn;
  entity.publishedOn = event.params.publishedOn;
  entity.isRevoked = false;
  entity.save();

}

export function handleAttestationRevoked(event: AttestationRevoked): void {

  let entity = Attestation.load(event.params.identifier.toHexString())

  if (entity) {
    entity.isRevoked = true;
    entity.save();
  }

}

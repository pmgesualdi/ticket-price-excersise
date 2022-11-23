import { tickets } from './index'

describe('tickets', () => {
  it('should check tickets is defined', () => {
    expect(tickets).toBeDefined()
  })

  it('should return false for a single 50 bill', () => {
    expect(tickets([50])).toBe(false)
  })

  it('should return false for a single 50 bill', () => {
    expect(tickets([100])).toBe(false)
  })

  it('should return true for a single 25 bill', () => {
    expect(tickets([25])).toBe(true)
  })

  it('should return true for 25 and 50 bills', () => {
    expect(tickets([25, 50])).toBe(true)
  })

  it('should return true for 25, 25, and 50 bills', () => {
    expect(tickets([25, 25, 50])).toBe(true)
  })

  it('should return false for 25, 50, and 100 bills', () => {
    expect(tickets([25, 50, 100])).toBe(false)
  })

  it('should return false for 25, 25, 50, 50, and 100 bills', () => {
    expect(tickets([25, 25, 50, 50, 100])).toBe(false)
  })

  it('should return true for 25, 50, 25, 25, and 100 bills', () => {
    expect(tickets([25, 50, 25, 25, 100])).toBe(true)
  })

  it('should return false for 25, 50, 25, and 100 bills', () => {
    expect(tickets([25, 50, 25, 100])).toBe(false)
  })

  it('should return false for 25, 50, 25, 25, 100, and 50 bills', () => {
    expect(tickets([25, 50, 25, 25, 100, 50])).toBe(true)
  })

  it('should return false for 25, 50, 25, 25, 100, 50, and 100 bills', () => {
    expect(tickets([25, 50, 25, 25, 100, 50, 100])).toBe(false)
  })
})

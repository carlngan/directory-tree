class Connection {
  available

  constructor() {
    this.available = true
  }

  setAvailable(a) {
    this.available = a
  }

  isAvailable() {
    return this.available
  }

  close() {
    this.setAvailable(true)
  }
}

export class PoolManager {
  // list of objects
  connections

  constructor() {
    this.connections = [new Connection(), new Connection(), new Connection(), new Connection(), new Connection()]
  }

  // get available connection, or return null if none is available
  getAvailableConnection() {
    for (let i = 0; i < this.connections.length; i++) {
      const conn = this.connections[i]
      if (conn.isAvailable()) {
        conn.setAvailable(false)
        return conn
      }
    }
    return null
  }

  async getConnection(timeout = 30000) {
    let ac = this.getAvailableConnection()
    if (ac) {
      return ac
    } else {
      const retryIn = 1000
      // time to loop
      const ttl = timeout / retryIn
      let loop = 0
      while (!ac && loop < ttl) {
        await new Promise(resolve => setTimeout(resolve, retryIn))
        ac = this.getAvailableConnection()
        if (ac) return ac
        loop++
      }
      throw new Error("Timeout on getting a connection")
    }
  }
}

/*

const p = new PoolManager()
try {
  const connection = p.getConnection()
} catch (e) {
  console.log(e)
}


connection.close()

have a waiting list
FIFO


 */

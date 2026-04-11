let currentReq: Request | null = null;

function useReq() {
  return {
    get: () => currentReq,
    set: (req: Request | null) => {
      currentReq = req;
    },
  };
}

export { useReq };

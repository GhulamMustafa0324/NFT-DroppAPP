import React from "react";
import {
  ConnectWallet,
  useAddress,
  useMetamask,
  useDisconnect,
} from "@thirdweb-dev/react";

function NFTDropPage() {
  //AUTH
  const connectWithMetaMask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  console.log(address);

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png"
              alt=""
            />
          </div>

          <div className="text-center p-5 space-y-2">
            <h1 className="text-4xl font-black text-white"> PAPAFAM Apes </h1>
            <h2 className="text-xl text-gray-300">
              A collection of PAPAFAM Apes who lives & breathes React!
            </h2>
          </div>
        </div>
      </div>

      {/* right */}

      <div className="flex flex-1 flex-col p-12 lg:col-span-6 ">
        {/* header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              PAPAFAM
            </span>{" "}
            NFT Market place
          </h1>

          <button
            onClick={() => (address ? disconnect() : connectWithMetaMask())}
            className="rounded-full bg-rose-400 px-4 py-2
           text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border" />

        {address && (
          <p className="text-center text-sm text-rose-400">
            {" "}
            You're logged in with wallet {address.substring(0, 5)}...{" "}
            {address.substring(address.length - 5)}{" "}
          </p>
        )}

        {/* content */}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            src="https://cdn.sanity.io/images/9ep8u6nk/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp"
            className="w-80 object-cover pb-10 lg:h-40"
            alt=""
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The PAPAFAM Ape Coding Club | NFT Drop
          </h1>

          <p className="pt-2 text-green-500 text-xl">13/21 NFT's Claimed</p>
        </div>

        {/* button */}
        <button className="h-16 w-full bg-red-600 rounded-full text-white font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;

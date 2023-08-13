const express = require("express");
const axios = require("axios");
const router = express.Router();

//getcourse Api
router.get("/course", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://www.udemy.com/api-2.0/courses",
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        "Basic QWtCblpnVXNHYUdBNFZUSkxHNDNvbnFSZUFYTGR2TDVRNmZiNXMxTjpyc2p2TllzWXdPc1dNVG5NcE16TnlGODRoMzZOTTV4cjN1eDhzeUhzRDF1MkNDNkxmZno4UjJFZmpxMjQ1UWFEVVVka2JEcDB2UGd0QlhSSk82Mkl0UzA4cnlXSEhSNGxBM1IydHF6aDdnQUkxaVpqeGRRWDk5TTBJS0lqY0doSQ==",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
});

// Endpoint to get course details by ID
router.get("/course/id", async (req, res) => {
  const courseId = req.params.id;
  const options = {
    method: "GET",
    url: `https://www.udemy.com/api-2.0/courses/${courseId}`,
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        "Basic QWtCblpnVXNHYUdBNFZUSkxHNDNvbnFSZUFYTGR2TDVRNmZiNXMxTjpyc2p2TllzWXdPc1dNVG5NcE16TnlGODRoMzZOTTV4cjN1eDhzeUhzRDF1MkNDNkxmZno4UjJFZmpxMjQ1UWFEVVVka2JEcDB2UGd0QlhSSk82Mkl0UzA4cnlXSEhSNGxBM1IydHF6aDdnQUkxaVpqeGRRWDk5TTBJS0lqY0doSQ==",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
});

module.exports = router;
